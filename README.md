# Thoughtful AI Support Agent

This project is a technical screening submission for Thoughtful AI. It implements a customer support AI agent that handles common questions about Thoughtful AI's products and services.

## Project Setup Instructions

1. Install dependencies:
    ```bash
    npm install
    ```

2. Set up Tailwind CSS:
    ```bash
    npx tailwindcss init
    ```

3. Start the development server:
    ```bash
    npm start
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
thoughtful-ai-agent/
├── README.md
├── package.json
├── tailwind.config.js
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── index.js
    ├── index.css
    ├── components/
    │   └── SupportAgent.js
    └── data/
        └── responses.js
```

## Features Implemented

### Conversational Interface
- Real-time chat interface
- Message history
- Auto-scrolling to latest messages
- Visual distinction between user and agent messages

### Answer Matching System
- Exact match checking
- Keyword-based matching
- Fallback responses for unknown queries

### Error Handling
- Input validation
- Empty message prevention
- Graceful fallback for unknown queries

### Responsive Design
- Mobile-friendly interface
- Clean, modern UI
- Smooth animations

## Technical Details
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** React Hooks

## Testing the Agent

Test the agent with these sample questions:
- "What does EVA do?"
- "Tell me about CAM"
- "How does PHIL work?"
- "What are the benefits?"

Try some variations and observe the matching system in action.

## Time Spent

This implementation was completed within the 30-minute time constraint of the technical challenge.

## Evaluation Criteria Met

### Functionality
- ✅ Implements conversation logic
- ✅ Uses predefined responses
- ✅ Provides fallback responses
- ✅ Clean interface

### Code Quality
- ✅ Well-structured components
- ✅ Clean, readable code
- ✅ Modern React practices
- ✅ Efficient state management

### Robustness
- ✅ Input validation
- ✅ Error handling
- ✅ No-results handling
- ✅ Smooth user experience

## Future Improvements
- Add unit tests
- Implement fuzzy matching for better response accuracy
- Add typing indicators
- Implement message persistence
- Add support for rich text responses

## License
MIT
