

export const queryFiltering = (fetchedData, params) => {
        // CAPACITY filter 
        if (params?.capacity === 'small') {
            // console.log(fetchedData.filter(item => item.occupancy <= 4))
            fetchedData = fetchedData.filter(item => item.occupancy < 4);
        } else if (params?.capacity === 'mid') {
            fetchedData = fetchedData.filter(item => item.occupancy >=4 && item.occupancy <= 6);
        } else if (params?.capacity === 'large') {
            fetchedData = fetchedData.filter(item => item.occupancy > 6);
        }

        // AREA Filter
        if (params?.area === 'woods') {
            fetchedData = fetchedData.filter(item => item.tags.includes('forest'))
        }
        else if (params?.area === 'beach') {
            fetchedData = fetchedData.filter(item => item.tags.includes('beach'))
        }
        else if (params?.area === 'urban') {
            fetchedData = fetchedData.filter(item => item.tags.includes('urban'))
        }

        return fetchedData;
    }