from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/send-giftee-data")
async def hello(request: Request):
    giftee_data = await request.json()
    print("It hit the backend!")
    print(giftee_data['selectedOption'])
    print(giftee_data['textAnswer'])
    #JP you can do the openAI stuff here. We should all decide what inputs we have in the frontend that get sent here,
    #rn its just the selected option and textAnswer.

    return {"giftIdea": "JP put the returned gift idea here"}


