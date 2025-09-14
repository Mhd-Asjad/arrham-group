import { NextResponse } from "next/server";


export async function POST() {
    try {
        const response = NextResponse.json({ message: "Logged out successfully" });

        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0),
            path: "/"
        })

        return response
    } catch (error) {
        console.error("Logout error", error)
        return NextResponse.json({ message: "Server error" }, { status: 500 })
    }
}