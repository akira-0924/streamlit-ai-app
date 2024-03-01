FROM python:3.7.12

WORKDIR /app
RUN pip install streamlit
RUN pip install openai
RUN pip install scikit-image
RUN pip install python-dotenv
RUN pip install boto3

EXPOSE 8501

COPY . /app

ENTRYPOINT ["streamlit", "run"]

CMD ["main.py"]
