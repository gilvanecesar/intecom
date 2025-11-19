from sqlmodel import SQLModel, Field

class Mecanismo(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    periodo: str
    produzido: int
    meta: int
    diferenca: int