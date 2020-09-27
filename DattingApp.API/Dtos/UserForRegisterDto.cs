using System.ComponentModel.DataAnnotations;

namespace DattingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string  UserName { get; set; }

        [Required]
        [StringLength(8,MinimumLength=4,ErrorMessage="the password length must be between 4 and 8 characters")]
        public string Password { get; set; }
    }
}