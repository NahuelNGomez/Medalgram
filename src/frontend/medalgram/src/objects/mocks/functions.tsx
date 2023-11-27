const BASE_URL = "https://grupo-3.2023.tecnicasdedisenio.com.ar/api/";
export function verifyToken(string: String) {

    const cookies = string.split(';');

    let token = null

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');

        if (name !== null) {
            token = value;
            console.log(token)
            if (token !== "null" && token !== "")
                return token
        }
    }
    return false;
}

export const viewProfiles = async (token: any) => {
    const url = BASE_URL + "api/accounts";
  
    try {
      const response = await fetch(url, { headers: { "token": String(token) } });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
  
      const data = await response.json();
      return data;
    } catch (err) {
      
      throw err; // Re-throw the error to handle it outside this function if needed
    }
  };

export function addTime(baseTime: any, timeToAdd: any) {
    let [baseHours, baseMinutes, baseSeconds] = baseTime.split(":").map(Number);
    let [addHours, addMinutes, addSeconds] = timeToAdd.split(":").map(Number);

    let totalSeconds = baseSeconds + addSeconds;
    let totalMinutes = baseMinutes + addMinutes;
    let totalHours = baseHours + addHours;

    if (totalSeconds >= 60) {
        totalMinutes += Math.floor(totalSeconds / 60);
        totalSeconds = totalSeconds % 60;
    }

    if (totalMinutes >= 60) {
        totalHours += Math.floor(totalMinutes / 60);
        totalMinutes = totalMinutes % 60;
    }

    return `${totalHours.toString().padStart(2, '0')}:${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`;
}



export function createStats(results: any): any {
    let stats: any = {
        totalTime: "00:00:00",
        totalRaces: 0,
        totalMedals: 0,
        totalGold: 0,
        totalSilver: 0,
        totalBronze: 0
    }
    results.filter((result: any) => result.status === "accepted")
        .map((result: any) => {
            stats.totalTime = (addTime(stats.totalTime, result.time));
            stats.totalRaces++;
            stats.totalMedals += result.position <= 3 ? 1 : 0;
            stats.totalGold += result.position === 1 ? 1 : 0;
            stats.totalSilver += result.position === 2 ? 1 : 0;
            stats.totalBronze += result.position === 3 ? 1 : 0;
        })

    return stats

}

export function getListShared(username: any, listShared: any){
        let usernames = []
        
        for (const shared of listShared) {
            console.log("pruebo con " + username +"y" + shared.first + "y" + shared.second)
            if (shared.first === username)
                usernames.push(shared.second)
            if (shared.second === username)
                usernames.push(shared.first)
        }
        return usernames


}
