
template para notificacion de nueva solicitud de cita (para isabel(en caso de pruebas usaremos el correo de roberto: [robertoarrieche965@gmail.com]))

<div style="font-family: system-ui, -apple-system, sans-serif; font-size: 14px; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.5;">
  <div style="text-align: center; margin-bottom: 25px;">
    <h2 style="color: #004B93; margin-bottom: 5px; font-size: 24px;">New Booking Request!! 🧹</h2>
    <p style="margin-top: 0; color: #666; font-size: 16px;">You have a new free estimate scheduled.</p>
  </div>
  
  <div style="padding: 24px; border: 1px solid #c2e0c6; border-radius: 8px; background-color: #f4fbf5;">
    <h3 style="margin-top: 0; color: #004B93; border-bottom: 2px solid #66BB6A; padding-bottom: 12px; margin-bottom: 20px; font-size: 18px;">Booking Details</h3>
    
    <table style="width: 100%; border-collapse: collapse; text-align: left;" role="presentation">
      <tbody>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; width: 140px; color: #004B93; border-bottom: 1px solid #e2e8f0;">Date &amp; Time:</td>
          <td style="padding: 10px 0; font-weight: bold; color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{booking_date}} at {{booking_time}}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #e2e8f0;">Client Name:</td>
          <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{client_name}}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #e2e8f0;">Phone Number:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a style="color: #004B93; text-decoration: none; font-weight: bold;" href="tel:{{client_phone}}">{{client_phone}}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #e2e8f0;">Email Address:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a style="color: #004B93; text-decoration: none; font-weight: bold;" href="mailto:{{email}}">{{client_email}}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #e2e8f0;">Service Area:</td>
          <td style="padding: 10px 0; color: #0f172a; font-weight: bold; border-bottom: 1px solid #e2e8f0;">{{service_area}}, AL</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #e2e8f0;">Service Type:</td>
          <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{service_type}}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #e2e8f0;">Frequency:</td>
          <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #e2e8f0;">{{frequency}}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; vertical-align: top;">Additional Notes:</td>
          <td style="padding: 10px 0; color: #0f172a; font-style: italic;">{{special_comments}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="margin-top: 30px; font-size: 12px; color: #666; text-align: center;">This email was generated automatically by the Andreas Cleaning LLC booking system.</div>
</div>


---------------------

template confirmacion de cita (para el cliente)


<div style="font-family: system-ui, -apple-system, sans-serif; font-size: 14px; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.5;">
  
<div style="font-family: system-ui, -apple-system, sans-serif; font-size: 14px; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.5;">
  
<div style="font-family: system-ui, -apple-system, sans-serif; font-size: 14px; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.5;">
  
  <!-- LOGO DE LA EMPRESA -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://andreas-cleaning.netlify.app/assets/images/logo.webp" alt="Andreas Cleaning LLC Logo" style="max-width: 180px; height: auto; display: inline-block;" />
  </div>

  <div style="text-align: center; margin-bottom: 25px;">
    <h2 style="color: #66BB6A; margin-bottom: 5px; font-size: 24px;">Appointment Requested! 🏠</h2>
    <p style="margin-top: 0; color: #666; font-size: 16px;">Thank you for choosing <strong>Andreas Cleaning LLC</strong>.</p>
  </div>
  
  <div style="padding: 24px; border: 1px solid #b3d1ff; border-radius: 8px; background-color: #f0f6ff;">
    <h3 style="margin-top: 0; color: #004B93; border-bottom: 2px solid #004B93; padding-bottom: 12px; margin-bottom: 20px; font-size: 18px;">Your Estimate Details</h3>
    
    <p style="color: #4a5568; margin-bottom: 20px;">Hi <strong>{{client_name}}</strong>, we have received your request for a free on-site estimate. Our team will review your notes and contact you shortly to confirm your booking.</p>
    
    <table style="width: 100%; border-collapse: collapse; text-align: left;" role="presentation">
      <tbody>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; width: 140px; color: #004B93; border-bottom: 1px solid #cbd5e1;">Date &amp; Time:</td>
          <td style="padding: 10px 0; font-weight: bold; color: #0f172a; border-bottom: 1px solid #cbd5e1;">{{booking_date}} at {{booking_time}}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #cbd5e1;">Service Type:</td>
          <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #cbd5e1;">{{service_type}}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #cbd5e1;">Frequency:</td>
          <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #cbd5e1;">{{frequency}}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #004B93; border-bottom: 1px solid #cbd5e1;">Service Area:</td>
          <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #cbd5e1;">{{service_area}}, AL</td>
        </tr>
      </tbody>
    </table>
    
    <div style="margin-top: 25px; padding: 12px; background-color: #e6f4ea; border-left: 4px solid #66BB6A; border-radius: 4px; font-size: 13px; color: #137333;">
      <strong>Note:</strong> If you need to reschedule or change any details, please reply directly to this email or call us at your earliest convenience.
    </div>
  </div>
  
  <div style="margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
    <p style="font-weight: bold; color: #004B93; margin-bottom: 5px; font-size: 

