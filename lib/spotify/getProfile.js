export async function getProfile() {
    const accessToken = localStorage.getItem('access_token');
  
    if (!accessToken) {
      throw new Error('No access token found');
    }
  
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    return await response.json();
  }