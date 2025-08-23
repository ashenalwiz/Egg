# AIEPA Website - Sri Lanka Egg Prices

Official website for the All Island Egg Producers Association displaying live egg prices.

## Features

- Live egg price display for producers and retailers
- Mobile-responsive design
- Clean, professional interface
- Real-time price updates

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload to S3: `aws s3 sync build/ s3://your-bucket-name`
3. Configure CloudFront distribution

### AWS Amplify
1. Connect your Git repository
2. Amplify will automatically build and deploy

## Project Structure

- `/src/components/` - React components
- `/src/data/` - Price data and API calls
- `/src/utils/` - Helper functions
- `/public/images/` - Static assets (logos, images)

## License

MIT License - All Island Egg Producers Association