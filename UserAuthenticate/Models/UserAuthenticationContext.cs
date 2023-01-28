using Microsoft.EntityFrameworkCore;

namespace LibraryManagement.Models
{
    public class UserAuthenticationContext: DbContext
    {
      
        public UserAuthenticationContext(DbContextOptions<UserAuthenticationContext> options) :base(options)
        {
            
        }
        public DbSet<UserAuthentication> UserAuthentications { get; set; }
    }
}
