import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edu Library",
  description: "Get the latest information about the library",
}

export const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.GRAPHQL_ENDPOINT || "",
    headers: {
      "x-hasura-admin-secret": process.env.GRAPHQL_AUTH || "",
    },
  }),
  cache: new InMemoryCache(),
  ssrMode: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
