namespace Tableau_Wrapper.CacheProviders
{
    public interface ICacheProvider<T>
    {
        bool HasNewData { get; }
        string UserId { get; set; }
        string UserName { get; set; }

        T Get();
        bool Save(T obj);
    }

    public interface IFileCacheProvider<T> : ICacheProvider<T>
    {
        bool CacheFileExists { get; }
        string FilePrefix { get; set; }
        string FolderLocation { get; set; }
    }
}