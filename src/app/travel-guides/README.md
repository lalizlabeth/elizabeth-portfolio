# Travel guides - Notion integration

This travel guides section now pulls content directly from a Notion database.

## Setup

1. **Create a Notion integration:**
   - Go to https://www.notion.so/my-integrations
   - Click "New integration"
   - Give it a name (e.g., "Portfolio Travel Guides")
   - Copy the "Internal Integration Token"

2. **Share your database with the integration:**
   - Open your travel guides database in Notion
   - Click the "..." menu in the top right
   - Select "Add connections"
   - Find and add your integration

3. **Set up environment variables:**
   - Create a `.env.local` file in the project root (already gitignored)
   - Add the following:
   ```
   NOTION_API_KEY=your_integration_token_here
   NOTION_TRAVEL_GUIDES_ID=2a98e553a9bb80a28f40e5eaf90ea32b
   ```
   
   **Note:** As of Notion API version 2025-09-03, databases and data sources are separate. The code now queries the data source directly (collection://2a98e553-a9bb-8010-a474-000b36723711).

## Database schema

The Notion database should have these properties:
- **title** (Title) - The name of the travel guide
- **country** (Text) - The country name
- **featuredImage** (Files) - Cover image for the guide
- **cardBackgroundColor** (Text) - Hex color for card background (e.g., "#4B22E0")
- **cardTextColor** (Text) - Hex color for card text (e.g., "#FF71F6")
- **cardTitleFont** (Text) - Font name for title (e.g., "Bricolage Grotesque")
- **cardSubtitleFont** (Text) - Font name for subtitle (e.g., "Space Mono")

## How it works

- `src/lib/travel-guides.ts` - Fetches data from Notion API and converts it to markdown
- Content is automatically converted from Notion blocks to markdown format
- Images and rich content from Notion pages are preserved
- Slugs are automatically generated from page titles

