import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  try {
    // Handle the POST request here using axios
    const response = await axios.post("/api", req.body);
    return NextResponse.json({ response, status: 200 });
  } catch (error: any) {
    return NextResponse.error();
  }
}

export async function GET(req: NextApiRequest) {
  try {
    // Handle the POST request here using axios

    return NextResponse.json({ hello: "testing" });
  } catch (error: any) {
    return NextResponse.error();
  }
}

export async function PUT(req: NextApiRequest) {
  try {
    // Handle the POST request here using axios
    const response = await axios.post("/api", req.body);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.error();
  }
}
