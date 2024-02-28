FROM python:3.7.12

WORKDIR /app
RUN pip install streamlit
# RUN pip install spleeter
# RUN pip install numpy
# RUN pip install matplotlib
# RUN pip install scipy
RUN pip install openai
RUN pip install scikit-image
RUN pip install python-dotenv
RUN pip install boto3
# COPY requirements.txt .

# RUN apt-get update && \
#     apt-get -y upgrade && \
#     apt-get install -y ffmpeg && \
#     pip install -r requirements.txt

EXPOSE 8501

COPY . /app

ENTRYPOINT ["streamlit", "run"]

CMD ["main.py"]
