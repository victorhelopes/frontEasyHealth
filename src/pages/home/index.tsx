import { useEffect, useState } from "react";
import { Button } from "../../components/atoms/button";
import { SectionTitle } from "../../components/atoms/sectionTitle";
import { TextField } from "../../components/molecules/textField";
import { Container, Row } from "../../styles/globalStyles";
import { Section } from "../createPatient/styles";
import { getPatients } from "../../services/api/patientProfessionalService";
import { getDifferenceYears } from "../../utils/getDifferenceYears";
import { Table } from "../../components/molecules/table";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { StyledActions } from "./styles";

export function Home() {
  const [patients, setPatients] = useState([]);
  const [tableInfos, setTableInfos] = useState([]);

  useEffect(() => {
    async function get() {
      const response = await getPatients();
      if (response.status === 200) setPatients(response.data);
    }
    get();
  }, []);

  useEffect(() => {
    function getTableInfos() {
        const date = new Date();
        const data: any = [];
        
        patients.forEach((patient: any) => {
          const birthDate = new Date(patient.patient.birthDate)
        const age = getDifferenceYears(date, birthDate)
        data.push({
            Protocolo: patient._id,
            Nome: patient.patient.name,
            Idade: age,
            Telefone: patient.patient.telephone,
            Ações: <StyledActions>
                <Button variant="text" color="primary" width="fit-content"><RemoveRedEyeOutlinedIcon /></Button>
                <Button variant="text" color="primary" width="fit-content"><DeleteOutlinedIcon /></Button>
            </StyledActions>
        });
      });
      setTableInfos(data);
    }
    getTableInfos();
  }, [patients]);

  return (
    <Container>
      <Section>
        <SectionTitle text="Pacientes" />
        <Row alingItems="end" justifyContent='space-between'>
          <TextField labelText="Pesquisar" placeholder="Pesquisar" maxWidth="20rem"/>
          <StyledActions>
            <Button width='fit-content'>Limpar</Button>
            <Button variant="contained" color="success" width='fit-content'>
              Pesquiar
            </Button>
          </StyledActions>
        </Row>
        <div>
          <Table 
            data={tableInfos} 
            withActions
          />
        </div>
      </Section>
    </Container>
  );
}
