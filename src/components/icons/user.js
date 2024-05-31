
export function User(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill={props.fill} d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path>

            <defs>
                <linearGradient id="myGradient">
                    <stop offset="0%" stopColor="#FF6A00" />
                    <stop offset="100%" stopColor="#EE0979" />
                </linearGradient>
            </defs>
        </svg>
    )
}