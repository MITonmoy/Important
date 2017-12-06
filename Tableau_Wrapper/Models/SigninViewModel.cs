namespace Tableau_Wrapper.Models
{
    public class SigninViewModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string SelectedSite { get; set; }
        public string RememberMe { get; set; }
        public bool IsFailedAuthentication { get; set; }
    }
}