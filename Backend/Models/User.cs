using System;

namespace UserVerwaltung.Models
{
    public record User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime Birthdate { get; set; }
    }
}