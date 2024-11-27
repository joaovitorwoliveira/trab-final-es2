import xml.etree.ElementTree as ET
import pandas as pd

class XmlToXlsAdapter:
    def _init_(self, xml_data):
        self.xml_data = xml_data

    def convert_to_xls(self, xls_filename):
        # Parseando os dados do XML
        tree = ET.parse(self.xml_data)
        root = tree.getroot()
        
        # Lista para armazenar os dados
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
        
        # Convertendo para DataFrame do Pandas
        df = pd.DataFrame(vendas)
        
        # Salvando como XLS
        df.to_excel(xls_filename, index=False)
        return df