const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '860e83988726f71abb3b2306fa4a712b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;