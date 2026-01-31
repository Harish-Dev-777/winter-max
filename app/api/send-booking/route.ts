import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend("re_PU9TGMaA_cuxCpoB1Bkx8rG5WH9saT2xf");

interface BookingData {
  name: string;
  mobile: string;
  location: string;
  service: string;
  description: string;
}

// Service name mapping for better email readability
const serviceNames: Record<string, string> = {
  "ac-repair": "A/C Repair & Service",
  "ac-install": "A/C Installation",
  "washing-machine": "Washing Machine Repair",
  refrigerator: "Refrigerator Repair",
  general: "Commercial AMC / Support",
};

export async function POST(request: NextRequest) {
  try {
    const data: BookingData = await request.json();

    const { name, mobile, location, service, description } = data;

    // Validate required fields
    if (!name || !mobile || !location || !service || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const serviceName = serviceNames[service] || service;
    const currentDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Winter Max Booking <onboarding@resend.dev>",
      to: ["harishmkdev@gmail.com"],
      subject: `🔧 New Service Booking - ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Service Booking</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); padding: 32px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">
                  ❄️ Winter Max
                </h1>
                <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 14px; font-weight: 500;">
                  New Service Booking Received
                </p>
              </div>
              
              <!-- Content -->
              <div style="padding: 32px;">
                
                <!-- Service Badge -->
                <div style="background: linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; border-left: 4px solid #2563eb;">
                  <p style="margin: 0; color: #1e40af; font-weight: 700; font-size: 18px;">
                    🔧 ${serviceName}
                  </p>
                </div>
                
                <!-- Details Card -->
                <div style="background-color: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                  <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 18px; font-weight: 700; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">
                    📋 Customer Details
                  </h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">👤 Name</span>
                      </td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
                        <span style="color: #1e293b; font-weight: 600; font-size: 15px;">${name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📱 Mobile</span>
                      </td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
                        <a href="tel:${mobile}" style="color: #2563eb; font-weight: 600; font-size: 15px; text-decoration: none;">${mobile}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📍 Location</span>
                      </td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
                        <span style="color: #1e293b; font-weight: 600; font-size: 15px;">${location}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0;">
                        <span style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🕐 Received</span>
                      </td>
                      <td style="padding: 12px 0; text-align: right;">
                        <span style="color: #1e293b; font-weight: 600; font-size: 15px;">${currentDate}</span>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <!-- Problem Description -->
                <div style="background-color: #fef3c7; border-radius: 12px; padding: 20px; border-left: 4px solid #f59e0b;">
                  <h3 style="margin: 0 0 12px 0; color: #92400e; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                    ⚠️ Problem Description
                  </h3>
                  <p style="margin: 0; color: #78350f; font-size: 15px; line-height: 1.6;">
                    ${description}
                  </p>
                </div>
                
                <!-- Call to Action -->
                <div style="margin-top: 24px; text-align: center;">
                  <a href="tel:${mobile}" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    📞 Call Customer Now
                  </a>
                </div>
                
              </div>
              
              <!-- Footer -->
              <div style="background-color: #1e293b; padding: 24px; text-align: center;">
                <p style="margin: 0; color: #94a3b8; font-size: 13px;">
                  This booking was submitted from <strong style="color: #ffffff;">Winter Max Website</strong>
                </p>
                <p style="margin: 8px 0 0 0; color: #64748b; font-size: 12px;">
                  © ${new Date().getFullYear()} Winter Max - Professional Appliance Repair Services
                </p>
              </div>
              
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        {
          error: `Failed to send email: ${error.message || JSON.stringify(error)}`,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking email sent successfully",
        id: emailData?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
