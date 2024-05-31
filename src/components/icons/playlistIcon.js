
export function PlaylistIcon(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth="2"><path d="M6 6L3 7.732V4.268z"></path><path strokeLinecap="round" d="M3 12h18M10 6h11M3 18h18"></path></g>
       <defs>
        <linearGradient id="myGradient">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#EE0979" />
        </linearGradient>
      </defs>
      </svg>
    )
  }