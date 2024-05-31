import { Accordion, AccordionItem } from "@nextui-org/react"
import { IoIosMore } from "react-icons/io";
import { GoChevronRight } from "react-icons/go";
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

const Colors = [
    {
        bgColor: "#D70060"
    },
    {
        bgColor: "#E54028"
    },
    {
        bgColor: "#F18D05"
    },
    {
        bgColor: "#F2BC06"
    },
    {
        bgColor: "#5EB11C"
    },
    {
        bgColor: "#3A7634"
    },
    {
        bgColor: "#0ABEBE"
    },
    {
        bgColor: "#00A1CB"
    },
    {
        bgColor: "#115793"
    }
]

export default function AccordionCategories() {

    // Define state variables
    const [categoriesData, setCategoriesData] = useState(null)
    const [error, setError] = useState(null)

    // Fetch data when the component mounts
    const { data: session } = useSession()


    useEffect(() => {
        {
            const featuredParameters = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + session?.user?.token
                }
            }

            fetch("https://api.spotify.com/v1/browse/categories", featuredParameters)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setCategoriesData(data)
                })
        }
    }, [session?.user.token])

    return (
        <Accordion
            itemClasses={{
                title: "text-white font-bold pl-5",
                trigger: "pr-5 text-4xl",
            }}>
            {categoriesData && categoriesData.categories.items.map((category, index) => (
                <AccordionItem
                    key={index}
                    title={category.name}
                    indicator={<IoIosMore className="text-white" />}
                    style={{ backgroundColor: Colors[index % Colors.length].bgColor }}
                    className="rounded-md mt-5"
                    classNames={{
                        content: "bg-nav px-5 py-5 rounded-b-md"
                    }}
                >
                    <div className="flex items-center justify-between font-semibold text-lg">
                        <p>Test</p>
                        <GoChevronRight />
                    </div>
                </AccordionItem>
            ))}

            {/* Display error if any */}
            {error && <p>Error: {error.message}</p>}
        </Accordion>
    )
}
