using System.Collections.Generic;

namespace Api.Data.Models
{
    public class Project
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set;}

        public ICollection<Task> Tasks { get; set;}
    }
}
