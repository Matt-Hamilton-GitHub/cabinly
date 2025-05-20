

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


 export const handleReserve = async (user, selectedRange, isValidRange, cabin, unavailableDates,setSelectedRange ) => {
    if (!user || !selectedRange || !isValidRange(selectedRange) || !cabin) {
      alert("Invalid reservation. Please select valid dates.");
      return;
    }

    const reservation = {
      cabinID: cabin._id,
      name: cabin.name,
      userID: user.userId,
      range: selectedRange,
      confirmed: true,
    };

    try {
      const res = await fetch("/api/reservations/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservation),
      });
      const data = await res.json();
      unavailableDates.push(selectedRange)
      setSelectedRange()
      console.log("Reservation response:", data);
    } catch (err) {
      console.error("Reservation error:", err);
    }
  };