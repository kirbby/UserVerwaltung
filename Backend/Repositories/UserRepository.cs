using System.Collections.Generic;
using System.Linq;
using UserVerwaltung.Models;

namespace UserVerwaltung.Repositories
{
    public class UserRepository
    {
        private List<User> users = new ()
        {
            new User 
            {
                Id = 1,
                FirstName = "Matthias",
                LastName = "Winkler",
                Birthdate = new System.DateTime(1991, 12, 7)
            },
            new User 
            {
                Id = 2,
                FirstName = "Thomas",
                LastName = "Breuss",
                Birthdate = new System.DateTime(1991, 10, 28)
            },
            new User 
            {
                Id = 3,
                FirstName = "Karim",
                LastName = "Allouche",
                Birthdate = new System.DateTime(1977, 8, 17)
            }
        };

        public IEnumerable<User> GetUsers()
        {
            return users;
        }

        public User GetUser(int id)
        {
            return users.FirstOrDefault(x => x.Id == id);
        }

        public void CreateUser(User user)
        {
            users.Add(user);
        }
    }
}