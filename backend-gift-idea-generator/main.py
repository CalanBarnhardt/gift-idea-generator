from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
app = FastAPI()

client = OpenAI(api_key="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")
def generate_ideas(giftOption, giftText):
    '''
    Args: Inputs from users on the website

    Uses GPT 4o to generate gift ideas based on information provided.

    Returns: a string with 5 gift ideas, comma seperated.
    
    '''
    model="gpt-4o"
    prompt = "Here are the selected options: {} and here is the custom text about them. Return a comma-seperated string of 5 gift suggestions. An example could be: 'Toy car, xbox controller, video game, laptop, headphones'. Be creative!".format(giftOption, giftText)
    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": "You are an expert at synthesizing information about a person and recommending gifts based on the information provided."},
            {"role": "user", "content": prompt}
        ]
    )
    # print(response)

    return response.choices[0].message.content

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
    response = generate_ideas(giftee_data['selectedOption'], giftee_data['textAnswer'])
    return {"giftIdea": response}


