import { devUrl } from "@/utils/URLs";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const reqBody = await request.json();
    const { items, email } = await reqBody;

    const updatedItems = await items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: updatedItems,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["US", "IN", "NP", "JP"],
      },

      success_url: `${devUrl}/orderplaced?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${devUrl}`,
      metadata: {
        email,
      },
    });
    return NextResponse.json({
      message: "Connection is alive",
      success: true,
      id: session.id,
    });
  } catch (error) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
};
