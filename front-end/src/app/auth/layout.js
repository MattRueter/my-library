export const metadata = {
    title: "My Library - Login/register",
    description: "An app to keep track of your books."
}

export default function LoginLayout({ children }) {
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}