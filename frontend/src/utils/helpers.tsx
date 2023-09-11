interface Meses {
  Jan: string,
  Feb: string,
  Mar: string,
  Apr: string,
  May: string,
  Jun: string,
  Jul: string,
  Aug: string,
  Sep: string,
  Oct: string,
  Nov: string,
  Dec: string,
}

const meses: Meses  = {
   Jan: '01',
   Feb: '02',
   Mar: '03',
   Apr: '04',
   May: '05',
   Jun: '06',
   Jul: '07',
   Aug: '08',
   Sep: '09',
   Oct: '10',
   Nov: '11',
   Dec: '12'
}
export function formatDate(date: string, ordem: number) {

    if(ordem == 1) {
      const day = date.substr(8, 2);
      const month = date.substr(5, 2);
      return `${day}/${month}`;
    } else {
      const partes = date.split(' ');
      const dia = partes[2];
      const mes: string = partes[1];
      const atual: string | undefined = meses[mes as keyof Meses]; 
      return `${dia}/${atual}`;
    }
  }

export  function somarUmMes(data: string) {
    const dataOriginal = new Date(data);
    const novaData = new Date(dataOriginal);
    novaData.setMonth(dataOriginal.getMonth() + 1);
    return novaData.toISOString();
  }

export  function converterParaYYYYMMDD(dataISO:string) {
    const data = new Date(dataISO);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Adiciona um zero à esquerda, se necessário
    const dia = String(data.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda, se necessário
    return `${ano}-${mes}-${dia}`;
  }