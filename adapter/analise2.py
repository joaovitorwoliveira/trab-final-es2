import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from xml_adapter import XmlToXlsAdapter

# Usando o Adapter para converter o XML para XLS
xml_file = 'dados.xml'
adapter = XmlToXlsAdapter(xml_file)
df = adapter.convert_to_xls('vendas_carros_brasil.xlsx')

# Exibindo as primeiras linhas do DataFrame
print(df.head())

# Analisando as vendas por marca
vendas_por_marca = df.groupby('marca')['quantidade'].sum()

# Analisando as vendas por estado
vendas_por_estado = df.groupby('estado')['quantidade'].sum()

# Visualizando as vendas por marca
plt.figure(figsize=(10, 6))
vendas_por_marca.plot(kind='bar', color='skyblue')
plt.title('Vendas de Carros por Marca')
plt.xlabel('Marca')
plt.ylabel('Quantidade de Vendas')
plt.xticks(rotation=45)
plt.show()

# Visualizando as vendas por estado
plt.figure(figsize=(10, 6))
vendas_por_estado.plot(kind='bar', color='lightcoral')
plt.title('Vendas de Carros por Estado')
plt.xlabel('Estado')
plt.ylabel('Quantidade de Vendas')
plt.xticks(rotation=45)
plt.show()