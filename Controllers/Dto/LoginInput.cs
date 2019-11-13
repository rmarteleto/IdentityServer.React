using System.ComponentModel.DataAnnotations;

namespace IdentityServer.React.Controllers.Dto
{
    public class LoginInput
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public bool RememberMe { get; set; }
        public string ReturnUrl { get; set; }
    }
}
