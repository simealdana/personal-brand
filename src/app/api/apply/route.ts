import { NextRequest, NextResponse } from "next/server";

interface LeadFormData {
  name: string;
  email: string;
  hasIdea: string;
  budget: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadFormData = await request.json();

    const { name, email, hasIdea, budget } = body;

    if (!name || !email || !hasIdea || !budget) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!["yes", "no"].includes(hasIdea)) {
      return NextResponse.json(
        { error: "Invalid hasIdea value" },
        { status: 400 }
      );
    }

    const validBudgets = ["500-1000", "1000-2000", "2000-5000"];
    if (!validBudgets.includes(budget)) {
      return NextResponse.json(
        { error: "Invalid budget value" },
        { status: 400 }
      );
    }

    console.log("Lead form submission:", {
      name,
      email,
      hasIdea,
      budget,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead form submitted successfully",
        data: {
          name,
          email,
          hasIdea,
          budget,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead form:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to process lead form submission",
      },
      { status: 500 }
    );
  }
}
