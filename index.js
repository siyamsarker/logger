const winston = require('winston');
const cities = [
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503 },
  { name: 'Delhi', country: 'India', lat: 28.6139, lon: 77.2090 },
  { name: 'Shanghai', country: 'China', lat: 31.2304, lon: 121.4737 },
  { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lon: -46.6333 },
  { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lon: -99.1332 },
  { name: 'Cairo', country: 'Egypt', lat: 30.0444, lon: 31.2357 },
  { name: 'Mumbai', country: 'India', lat: 19.0760, lon: 72.8777 },
  { name: 'Beijing', country: 'China', lat: 39.9042, lon: 116.4074 },
  { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lon: 90.4125 },
  { name: 'Osaka', country: 'Japan', lat: 34.6937, lon: 135.5023 },
  { name: 'New York', country: 'USA', lat: 40.7128, lon: -74.0060 },
  { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lon: 67.0011 },
  { name: 'Buenos Aires', country: 'Argentina', lat: -34.6037, lon: -58.3816 },
  { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lon: 28.9784 },
  { name: 'Kolkata', country: 'India', lat: 22.5726, lon: 88.3639 },
  { name: 'Manila', country: 'Philippines', lat: 14.5995, lon: 120.9842 },
  { name: 'Lagos', country: 'Nigeria', lat: 6.5244, lon: 3.3792 },
  { name: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lon: -43.1729 },
  { name: 'Tianjin', country: 'China', lat: 39.3434, lon: 117.3616 },
  { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lon: 106.8456 },
  { name: 'Los Angeles', country: 'USA', lat: 34.0522, lon: -118.2437 },
  { name: 'Bangkok', country: 'Thailand', lat: 13.7563, lon: 100.5018 },
  { name: 'Seoul', country: 'South Korea', lat: 37.5665, lon: 126.9780 },
  { name: 'London', country: 'UK', lat: 51.5074, lon: -0.1278 },
  { name: 'Paris', country: 'France', lat: 48.8566, lon: 2.3522 },
  { name: 'Berlin', country: 'Germany', lat: 52.5200, lon: 13.4050 },
  { name: 'Madrid', country: 'Spain', lat: 40.4168, lon: -3.7038 },
  { name: 'Rome', country: 'Italy', lat: 41.9028, lon: 12.4964 },
  { name: 'Chicago', country: 'USA', lat: 41.8781, lon: -87.6298 },
  { name: 'Houston', country: 'USA', lat: 29.7604, lon: -95.3698 },
  { name: 'Moscow', country: 'Russia', lat: 55.7558, lon: 37.6173 },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lon: -79.3832 },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lon: 103.8198 },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093 },
  { name: 'Melbourne', country: 'Australia', lat: -37.8136, lon: 144.9631 },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lon: 55.2708 },
  { name: 'Lima', country: 'Peru', lat: -12.0464, lon: -77.0428 },
  { name: 'Johannesburg', country: 'South Africa', lat: -26.2041, lon: 28.0473 },
  { name: 'Cape Town', country: 'South Africa', lat: -33.9249, lon: 18.4241 },
  { name: 'Nairobi', country: 'Kenya', lat: -1.2921, lon: 36.8219 },
  { name: 'Warsaw', country: 'Poland', lat: 52.2297, lon: 21.0122 },
  { name: 'Vienna', country: 'Austria', lat: 48.2082, lon: 16.3738 },
  { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lon: 4.9041 },
  { name: 'Brussels', country: 'Belgium', lat: 50.8503, lon: 4.3517 },
  { name: 'Stockholm', country: 'Sweden', lat: 59.3293, lon: 18.0686 },
  { name: 'Oslo', country: 'Norway', lat: 59.9139, lon: 10.7522 },
  { name: 'Copenhagen', country: 'Denmark', lat: 55.6761, lon: 12.5683 },
  { name: 'Helsinki', country: 'Finland', lat: 60.1699, lon: 24.9384 },
  { name: 'Athens', country: 'Greece', lat: 37.9838, lon: 23.7275 },
  { name: 'Prague', country: 'Czech Republic', lat: 50.0755, lon: 14.4378 },
  { name: 'Lisbon', country: 'Portugal', lat: 38.7223, lon: -9.1393 },
  { name: 'Dublin', country: 'Ireland', lat: 53.3498, lon: -6.2603 },
  { name: 'Vancouver', country: 'Canada', lat: 49.2827, lon: -123.1207 },
  { name: 'Montreal', country: 'Canada', lat: 45.5017, lon: -73.5673 },
  { name: 'Bogota', country: 'Colombia', lat: 4.7110, lon: -74.0721 },
  { name: 'Santiago', country: 'Chile', lat: -33.4489, lon: -70.6693 },
  { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lon: 101.6869 },
  { name: 'Ho Chi Minh City', country: 'Vietnam', lat: 10.8231, lon: 106.6297 },
  { name: 'Hanoi', country: 'Vietnam', lat: 21.0285, lon: 105.8542 },
  { name: 'Baghdad', country: 'Iraq', lat: 33.3152, lon: 44.3661 },
  { name: 'Tehran', country: 'Iran', lat: 35.6892, lon: 51.3890 },
  { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lon: 46.6753 },
  { name: 'Tel Aviv', country: 'Israel', lat: 32.0853, lon: 34.7818 },
  { name: 'Ankara', country: 'Turkey', lat: 39.9334, lon: 32.8597 },
  { name: 'Kiev', country: 'Ukraine', lat: 50.4501, lon: 30.5234 },
  { name: 'Bucharest', country: 'Romania', lat: 44.4268, lon: 26.1025 },
  { name: 'Budapest', country: 'Hungary', lat: 47.4979, lon: 19.0402 },
  { name: 'Belgrade', country: 'Serbia', lat: 44.7866, lon: 20.4489 },
  { name: 'Casablanca', country: 'Morocco', lat: 33.5731, lon: -7.5898 },
  { name: 'Algiers', country: 'Algeria', lat: 36.7538, lon: 3.0588 },
  { name: 'Tunis', country: 'Tunisia', lat: 36.8065, lon: 10.1815 },
  { name: 'Auckland', country: 'New Zealand', lat: -36.8509, lon: 174.7645 },
  { name: 'Wellington', country: 'New Zealand', lat: -41.2866, lon: 174.7756 },
  { name: 'Minsk', country: 'Belarus', lat: 53.9045, lon: 27.5615 },
  { name: 'Riga', country: 'Latvia', lat: 56.9496, lon: 24.1052 },
  { name: 'Vilnius', country: 'Lithuania', lat: 54.6872, lon: 25.2797 },
  { name: 'Tallinn', country: 'Estonia', lat: 59.4370, lon: 24.7536 },
  { name: 'Zagreb', country: 'Croatia', lat: 45.8150, lon: 15.9819 },
  { name: 'Sarajevo', country: 'Bosnia and Herzegovina', lat: 43.8563, lon: 18.4131 },
  { name: 'Sofia', country: 'Bulgaria', lat: 42.6977, lon: 23.3219 },
  { name: 'Bratislava', country: 'Slovakia', lat: 48.1486, lon: 17.1077 },
  { name: 'Ljubljana', country: 'Slovenia', lat: 46.0569, lon: 14.5058 },
  { name: 'Podgorica', country: 'Montenegro', lat: 42.4304, lon: 19.2594 },
  { name: 'Skopje', country: 'North Macedonia', lat: 41.9973, lon: 21.4280 },
  { name: 'Tirana', country: 'Albania', lat: 41.3275, lon: 19.8187 },
  { name: 'Reykjavik', country: 'Iceland', lat: 64.1466, lon: -21.9426 },
  { name: 'Doha', country: 'Qatar', lat: 25.2854, lon: 51.5310 },
  { name: 'Muscat', country: 'Oman', lat: 23.5880, lon: 58.3829 },
  { name: 'Abu Dhabi', country: 'UAE', lat: 24.4539, lon: 54.3773 },
  { name: 'Manama', country: 'Bahrain', lat: 26.2235, lon: 50.5876 },
  { name: 'Kuwait City', country: 'Kuwait', lat: 29.3759, lon: 47.9774 },
  { name: 'Colombo', country: 'Sri Lanka', lat: 6.9271, lon: 79.8612 },
  { name: 'Kathmandu', country: 'Nepal', lat: 27.7172, lon: 85.3240 },
  { name: 'Thimphu', country: 'Bhutan', lat: 27.4728, lon: 89.6390 },
  { name: 'Male', country: 'Maldives', lat: 4.1755, lon: 73.5093 },
  { name: 'Islamabad', country: 'Pakistan', lat: 33.6844, lon: 73.0479 },
  { name: 'Kabul', country: 'Afghanistan', lat: 34.5553, lon: 69.2075 },
  { name: 'Tashkent', country: 'Uzbekistan', lat: 41.2995, lon: 69.2401 },
  { name: 'Astana', country: 'Kazakhstan', lat: 51.1605, lon: 71.4704 },
  { name: 'Bishkek', country: 'Kyrgyzstan', lat: 42.8746, lon: 74.5698 },
  { name: 'Dushanbe', country: 'Tajikistan', lat: 38.5598, lon: 68.7870 },
  { name: 'Ashgabat', country: 'Turkmenistan', lat: 37.9601, lon: 58.3261 },
  { name: 'Yerevan', country: 'Armenia', lat: 40.1872, lon: 44.5152 },
  { name: 'Tbilisi', country: 'Georgia', lat: 41.7151, lon: 44.8271 },
  { name: 'Baku', country: 'Azerbaijan', lat: 40.4093, lon: 49.8671 },
  { name: 'Addis Ababa', country: 'Ethiopia', lat: 9.0227, lon: 38.7468 },
  { name: 'Nairobi', country: 'Kenya', lat: -1.2921, lon: 36.8219 },
  { name: 'Kampala', country: 'Uganda', lat: 0.3476, lon: 32.5825 },
  { name: 'Dar es Salaam', country: 'Tanzania', lat: -6.7924, lon: 39.2083 },
  { name: 'Kigali', country: 'Rwanda', lat: -1.9441, lon: 30.0619 },
  { name: 'Bujumbura', country: 'Burundi', lat: -3.3614, lon: 29.3599 },
  { name: 'Lusaka', country: 'Zambia', lat: -15.3875, lon: 28.3228 },
  { name: 'Harare', country: 'Zimbabwe', lat: -17.8252, lon: 31.0335 },
  { name: 'Gaborone', country: 'Botswana', lat: -24.6282, lon: 25.9231 },
  { name: 'Windhoek', country: 'Namibia', lat: -22.5609, lon: 17.0658 },
  { name: 'Maputo', country: 'Mozambique', lat: -25.9692, lon: 32.5732 },
  { name: 'Luanda', country: 'Angola', lat: -8.8383, lon: 13.2344 },
  { name: 'Libreville', country: 'Gabon', lat: 0.4162, lon: 9.4673 },
  { name: 'Brazzaville', country: 'Congo', lat: -4.2634, lon: 15.2429 },
  { name: 'Kinshasa', country: 'DR Congo', lat: -4.4419, lon: 15.2663 },
  { name: 'Dakar', country: 'Senegal', lat: 14.7167, lon: -17.4677 },
  { name: 'Bamako', country: 'Mali', lat: 12.6392, lon: -8.0029 },
  { name: 'Ouagadougou', country: 'Burkina Faso', lat: 12.3714, lon: -1.5197 },
  { name: 'Accra', country: 'Ghana', lat: 5.6037, lon: -0.1870 },
  { name: 'Abidjan', country: 'Ivory Coast', lat: 5.3599, lon: -4.0083 },
  { name: 'Monrovia', country: 'Liberia', lat: 6.2907, lon: -10.7605 },
  { name: 'Freetown', country: 'Sierra Leone', lat: 8.4840, lon: -13.2299 },
  { name: 'Conakry', country: 'Guinea', lat: 9.6412, lon: -13.5784 }
];

// Configure Winston logger
const logger = winston.createLogger({
  level: 'info', // Logging level
  format: winston.format.combine(
    winston.format.timestamp(), // Add timestamp
    winston.format.json() // Output logs in JSON format
  ),
  transports: [
    new winston.transports.Console() // Log to console
  ]
});

// Add error handling and graceful shutdown
process.on('SIGTERM', () => {
  logger.info('Received SIGTERM. Performing graceful shutdown...');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('Received SIGINT. Performing graceful shutdown...');
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

const getRandomCity = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

const logWithTimestamp = () => {
  try {
    const city = getRandomCity();
    const logMessage = `City: ${city.name}, ${city.country} | Coordinates: ${city.lat}°N, ${city.lon}°E`;
    logger.info(logMessage); // Log using Winston
  } catch (error) {
    logger.error('Error in logWithTimestamp:', error);
  }
};

// Add health check endpoint
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  logger.info('Health check endpoint available on port 3000');
});

// Log every second
const interval = setInterval(logWithTimestamp, 1000);
logger.info('World cities coordinates logger started...');