import xml.etree.ElementTree as ET

# Função para parsear o XML e retornar os dados
def parse_xml(file):
    tree = ET.parse(file)
    root = tree.getroot()
    
    # Lista para armazenar os dados das vendas
    vendas = []
    
    for venda in root.findall('venda'):
        marca = venda.find('marca').text
        modelo = venda.find('modelo').text
        estado = venda.find('estado').text
        quantidade = int(venda.find('quantidade').text)
        mes = venda.find('mes').text
        
        vendas.append({
            'marca': marca,
            'modelo': modelo,
            'estado': estado,
            'quantidade': quantidade,
            'mes': mes
        })
    
    return vendas

# Função para calcular as vendas por marca e estado
def analisar_vendas(vendas):
    # Cria dicionários para armazenar as vendas por marca e estado
    vendas_por_marca = {}
    vendas_por_estado = {}
    
    for venda in vendas:
        # Vendas por marca
        if venda['marca'] not in vendas_por_marca:
            vendas_por_marca[venda['marca']] = 0
        vendas_por_marca[venda['marca']] += venda['quantidade']
        
        # Vendas por estado
        if venda['estado'] not in vendas_por_estado:
            vendas_por_estado[venda['estado']] = 0
        vendas_por_estado[venda['estado']] += venda['quantidade']
    
    return vendas_por_marca, vendas_por_estado

# Função para imprimir os resultados
def imprimir_resultados(vendas_por_marca, vendas_por_estado):
    print("Vendas por Marca:")
    for marca, quantidade in vendas_por_marca.items():
        print(f"{marca}: {quantidade} unidades")
    
    print("\nVendas por Estado:")
    for estado, quantidade in vendas_por_estado.items():
        print(f"{estado}: {quantidade} unidades")

# Leitura do XML e análise
vendas = parse_xml('dados.xml')
vendas_por_marca, vendas_por_estado = analisar_vendas(vendas)
imprimir_resultados(vendas_por_marca, vendas_por_estado)