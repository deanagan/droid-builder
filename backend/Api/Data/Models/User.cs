using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Api.Data.Models
{
    public class User
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Role { get; set;}

        [Required]
        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "E-mail is not valid")]
        public string Email { get; set; }

        [Required]
        public string Hash { get; set; }

    }
}
