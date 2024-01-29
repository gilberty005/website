using System;
using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;

namespace personalwebsite.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly ILogger<ContactController> _logger;
    public ContactController(ILogger<ContactController> logger)
	{
        _logger = logger;
    }

    [HttpPost("SendEmail")] 
    public IActionResult SendEmail(EmailEntity email)
    {
        try
        {
            string from = "gilberty020@gmail.com";
            SmtpClient client = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential(from, "puxp mbht deyv yebx"),
                EnableSsl = true
            };
            string message = "Name: " + email.Name + " Subject: " + email.Subject + " Message: " + email.Message; 
            client.Send(from,"gilberty005@gmail.com",email.Subject,message);
            return StatusCode(200); 
        }
        catch(Exception e)
        {
            return StatusCode(500);
        }
    }
}

