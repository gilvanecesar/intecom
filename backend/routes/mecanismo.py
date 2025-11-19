from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from models.mecanismo import Mecanismo
from database.connect import engine

router = APIRouter()

def get_session():
    with Session(engine) as session:
        yield session

@router.post("/mecanismo")
def criar_item(item: Mecanismo, session: Session = Depends(get_session)):
    session.add(item)
    session.commit()
    session.refresh(item)
    return item

@router.get("/mecanismo")
def listar_itens(session: Session = Depends(get_session)):
    consulta = select(Mecanismo)
    return session.exec(consulta).all()