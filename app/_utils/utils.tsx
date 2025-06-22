


 export const handleReserve = async (user, selectedRange, isValidRange, cabin, unavailableDates,setSelectedRange ) => {
    if (!user || !selectedRange || !isValidRange(selectedRange) || !cabin) {
      alert("Invalid reservation. Please select valid dates.");
      return;
    }

    const reservation = {
      cabinID: cabin._id,
      price: cabin.price,
      name: cabin.title,
      location: cabin.location,
      imageUrl: cabin.imageUrl,
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

  export function formatDate(dateStr) {
    const date = new Date(dateStr);

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }


 export const handleGroupSignUp = (userId: string, groupId: string) =>{
  console.log(userId, groupId);
  }

