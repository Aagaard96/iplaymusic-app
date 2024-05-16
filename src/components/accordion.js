import { Accordion, AccordionItem } from "@nextui-org/react"
import MoreIcon from "./icons/moreIcon"
import ArrowForward from "./icons/arrowForward"
import { useEffect, useState } from "react"

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
    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID
    const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET

    // Define state variables
    const [categoriesData, setCategoriesData] = useState(null)
    const [error, setError] = useState(null)

    // Fetch data when the component mounts
    useEffect(() => {
        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
        })
            .then(response => response.json())
            .then(data => {
                const AUTH = data.access_token

                fetch("https://api.spotify.com/v1/browse/categories", {
                    headers: {
                        "Authorization": `Bearer ${AUTH}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setCategoriesData(data)
                    })
                    .catch(error => setError(error))
            })
            .catch(error => setError(error))
    }, [client_id, client_secret])

    return (
        <Accordion
            itemClasses={{
                title: "text-white font-bold pl-5",
                trigger: "pr-5 text-4xl",
            }}>
            {/* Check if fetched data is available before rendering */}
            {categoriesData && categoriesData.categories.items.map((category, index) => (
                <AccordionItem
                    key={index}
                    title={category.name}
                    indicator={<MoreIcon />}
                    style={{ backgroundColor: Colors[index % Colors.length].bgColor }}
                    className="rounded-md mt-5"
                    classNames={{
                        content: "bg-white px-5 py-5 rounded-b-md"
                    }}
                >
                    <div className="flex items-center justify-between font-semibold text-lg">
                        <p>Test</p>
                        <ArrowForward />
                    </div>
                </AccordionItem>
            ))}

            {/* Display error if any */}
            {error && <p>Error: {error.message}</p>}
        </Accordion>
    )
}
