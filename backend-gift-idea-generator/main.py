from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI

app = FastAPI()

client = OpenAI(api_key="")
def generate_ideas(giftOptions, gender, age, relationship, giftText):
    '''
    Args: Inputs from users on the website

    Uses GPT 4o to generate gift ideas based on information provided.

    Returns: a string with 5 gift ideas, comma seperated.
    
    '''
    model="gpt-4o"
    prompt = prompt = f"""
        Return a comma-separated string of 5 gift suggestions.
        An example could be: 'Toy car, xbox controller, video game, laptop, headphones'.
        Generate the gift suggestions based on the following information about the person receiving the gift:
        Hobbies: {giftOptions}
        Gender: {gender}
        Age: {age}
        Relationship to the person giving the gift: {relationship} 
        Be creative!
    """.format(giftOptions, giftText)
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
    response = generate_ideas(
        giftee_data['selectedOptions'], 
        giftee_data['gender'], 
        giftee_data['age'], 
        giftee_data['relationship'], 
        giftee_data['textAnswer']
    )
    print(response)
    return {"giftIdeas": response}