using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using UserVerwaltung.Models;
using UserVerwaltung.Repositories;

namespace UserVerwaltung.Controllers
{
    [ApiController]
    [Route("[controller]")] //same as "users"
    public class UsersController : ControllerBase
    {
        private readonly UserRepository repository;

        public UsersController()
        {
            repository = new UserRepository();
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            return Ok(repository.GetUsers());
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUser(int id)
        {
            var user = repository.GetUser(id);

            if (user is null)
            {
                return NotFound();
            }
            
            return user;
        }

        [HttpPost]
        public ActionResult CreateUser(User user)
        {
            repository.CreateUser(user);

            return Ok();
        }
    }
}