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

@router.put("/mecanismo/{item_id}")
def atualizar_item(item_id: int, dados: Mecanismo, session: Session = Depends(get_session)):
    item_db = session.get(Mecanismo, item_id)

    if not item_db:
        return {"erro": "Item não encontrado"}
    
    item_db.periodo = dados.periodo
    item_db.produzido = dados.produzido
    item_db.meta = dados.meta
    item_db.diferenca = dados.diferenca

    session.commit()
    session.refresh(item_db)

    return item_db

@router.delete("/mecanismo/{item_id}")
def deletar_item(item_id: int, session: Session = Depends(get_session)):
    item_db = session.get(Mecanismo, item_id)

    if not item_db:
        return{"erro": "Item não encontrado"}
    
    session.delete(item_db)
    session.commit()

    return {"mensagem": "Item removido com sucesso"}