import { FormEvent, useEffect, useState } from "react";
import { Stepper } from "../../components/molecules/stepper";
import { TextField } from "../../components/molecules/textField";
import { SectionHeader } from "../../components/molecules/sectionHeader";
import { Button } from "../../components/atoms/button";
import { Popup } from "../../components/molecules/popup";

import { Container } from "../../styles/globalStyles";

import { PatientProps } from "../../types/patient";

import { BottomForm, Section, Form } from "./styles";

import { getDifferenceYears } from "../../utils/getDifferenceYears";
import { createPatient } from "../../services/api/patientService";
import {
  FormPeronsalDataErrors,
  PeronsalDataForm,
} from "../../components/templates/personalDataForm";

const AGE_LIMIT_NEED_RESPONSIBLE = 12;

export function CreatePatient() {
  const [patient, setPatient] = useState<PatientProps>({
    name: "",
    lastName: "",
    cpf: "",
    telephone: "",
    email: "",
    gender: "M",
    birthDate: "",
    responsibles: [],
  });
  const [needResponsible, setNeedResponsible] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<FormPeronsalDataErrors>({});

  const stepsLabel = ["Dados pessoais", "Dados pacientes"];

  function validate() {
    let errors: FormPeronsalDataErrors = {};
    if (!patient.name) {
      errors.name = "Nome é obrigatório!";
    }

    if (!patient.lastName) {
      errors.lastName = "Sobrenome é obrigatório!";
    }

    if (!patient.birthDate) {
      errors.birthDate = "Data de nascimento é obrigatório!";
    }

    return errors;
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      const body: PatientProps = patient;
      const response = await createPatient(body);
      if (response?.status === 200) {
        setPatient({
          name: "",
          lastName: "",
          cpf: "",
          telephone: "",
          email: "",
          gender: "M",
          birthDate: "",
          responsibles: [],
        });
        setStep(0);
      }
    } else {
      setStep(0);
      setErrors(validationErrors);
    }
    setIsLoading(false);
    setPopupIsOpen(true);
  }

  useEffect(() => {
    function verifyIfNeedResponsible() {
      const date = new Date();
      const birth = new Date(patient.birthDate || "");
      const diffYears = getDifferenceYears(date, birth);

      if (diffYears < AGE_LIMIT_NEED_RESPONSIBLE) {
        setNeedResponsible(true);
      } else {
        setNeedResponsible(false);
        setPatient((prevState) => ({
          ...prevState,
          responsibles: [],
        }));
      }
    }

    verifyIfNeedResponsible();
  }, [patient.birthDate]);

  function addResponsible() {
    const repsonsibles = patient.responsibles || [];
    repsonsibles.push({
      name: "",
      lastName: "",
      cpf: "",
      telephone: "",
      email: "",
      gender: "",
      birthDate: "",
    });
    setPatient((prevUser) => ({
      ...prevUser,
      responsibles: repsonsibles,
    }));
  }

  return (
    <Container>
      <Popup
        title="Paciente cadastrado com sucesso"
        text="Paciente foi regristrado e aparecerá na sua lista de pacientes"
        type="sucess"
        isOpen={popupIsOpen}
        close={() => {
          setPopupIsOpen(false);
        }}
      />
      <Stepper currentStep={step} stepsLabels={stepsLabel} setStep={setStep} />

      <Form onSubmit={submit}>
        {step === 0 && (
          <PeronsalDataForm
            values={patient}
            setData={setPatient}
            errors={errors}
            title={stepsLabel[step]}
          />
        )}
        {step === 1 && (
          <Section>
            <SectionHeader text={stepsLabel[step]} />
            <TextField
              labelText="Transtorno"
              placeholder="Transtorno"
              value={patient.disorder}
              onChange={(value) => {
                setPatient((prevUser) => ({
                  ...prevUser,
                  disorder: value.target.value,
                }));
              }}
            />
          </Section>
        )}
        {needResponsible && step === 0 && (
          <Button
            variant="link"
            color="primary"
            type="button"
            onClick={addResponsible}
          >
            Adicionar responsável
          </Button>
        )}
        <BottomForm>
          <Button
            variant="outlined"
            color="error"
            type="button"
            loading={isLoading}
          >
            Cancelar
          </Button>
          {step === stepsLabel.length - 1 && (
            <Button
              variant="contained"
              color="success"
              type="submit"
              loading={isLoading}
              onClick={submit}
            >
              Confirmar
            </Button>
          )}
          {step < stepsLabel.length - 1 && (
            <Button
              variant="contained"
              color="success"
              type="button"
              onClick={() => {
                setStep(step + 1);
              }}
            >
              Próximo
            </Button>
          )}
        </BottomForm>
      </Form>
    </Container>
  );
}
