export const saveAd = (ad, userId) => {
    const ads = JSON.parse(localStorage.getItem('ads') || '[]');
    const newAd = { 
      ...ad, 
      id: Date.now(),
      userId: userId 
    };
    localStorage.setItem('ads', JSON.stringify([...ads, newAd]));
  };
  

export const getAds = () => {
    return JSON.parse(localStorage.getItem('ads') || '[]');
};
export const deleteAd = (adId) => {
  const ads = JSON.parse(localStorage.getItem('ads') || '[]');
  const filtered = ads.filter(ad => ad.id !== adId);
  localStorage.setItem('ads', JSON.stringify(filtered));
};

export const updateAd = (adId, updatedAd) => {
  const ads = JSON.parse(localStorage.getItem('ads') || '[]');
  const updated = ads.map(ad => ad.id === adId ? {...ad, ...updatedAd} : ad);
  localStorage.setItem('ads', JSON.stringify(updated));
};