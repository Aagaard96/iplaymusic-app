
export function CategoryIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill={props.fill} d="M14 25h14v2H14zm-6.83 1l-2.58 2.58L6 30l4-4l-4-4l-1.42 1.41zM14 15h14v2H14zm-6.83 1l-2.58 2.58L6 20l4-4l-4-4l-1.42 1.41zM14 5h14v2H14zM7.17 6L4.59 8.58L6 10l4-4l-4-4l-1.42 1.41z"></path>
     <defs>
        <linearGradient id="myGradient">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#EE0979" />
        </linearGradient>
      </defs>
    </svg>
  )
}