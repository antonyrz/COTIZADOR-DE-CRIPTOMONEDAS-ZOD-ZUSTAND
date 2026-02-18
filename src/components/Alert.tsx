import type { ReactNode } from "react";



export default function Alert({children}: {children: ReactNode}) {
  return (
    <div className="error-alert">{children}</div>
  )
}
