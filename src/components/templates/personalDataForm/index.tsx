import { Section } from "../../../pages/createPatient/styles";
import { Row } from "../../../styles/globalStyles";
import { PatientProps } from "../../../types/patient";
import { SectionHeader } from "../../molecules/sectionHeader";
import { SelectField } from "../../molecules/selectField";
import { TextField } from "../../molecules/textField";

export interface FormPeronsalDataErrors {
  email?: string;
  gender?: string;
  cpf?: string;
  name?: string;
  lastName?: string;
  birthDate?: string;
  responsibles?: FormPeronsalDataErrors[];
}

interface PersonalDataFormProps {
  title: string;
  values: PatientProps;
  setData: React.Dispatch<React.SetStateAction<PatientProps>>;
  errors: FormPeronsalDataErrors;
}

export function PeronsalDataForm({ ...props }: PersonalDataFormProps) {
  return (
    <>
      <Section>
        <SectionHeader text={props.title} />
        <Row>
          <TextField
            labelText="CPF"
            placeholder="CPF"
            value={props.values.cpf}
            onChange={(value) => {
              props.setData((prevUser) => ({
                ...prevUser,
                cpf: value.target.value,
              }));
            }}
            status={props.errors.cpf ? "error" : "default"}
            errortext={props.errors.cpf}
          />
          <SelectField
            labelText="Sexo"
            options={[
              { value: "M", label: "Homem" },
              { value: "F", label: "Mulher" },
            ]}
            onChange={(value) => {
              props.setData((prevUser) => ({
                ...prevUser,
                gender: value.target.value as "M" | "F",
              }));
            }}
            status={props.errors.name ? "error" : "default"}
            errortext={props.errors.name}
          />
        </Row>
        <Row>
          <TextField
            labelText="Nome"
            placeholder="Nome"
            value={props.values.name}
            onChange={(value) => {
              props.setData((prevUser) => ({
                ...prevUser,
                name: value.target.value,
              }));
            }}
            status={props.errors.name ? "error" : "default"}
            errortext={props.errors.name}
          />
          <TextField
            labelText="Sobrenome"
            placeholder="Sobrenome"
            value={props.values.lastName}
            onChange={(value) => {
              props.setData((prevUser) => ({
                ...prevUser,
                lastName: value.target.value,
              }));
            }}
            status={props.errors.lastName ? "error" : "default"}
            errortext={props.errors.lastName}
          />
        </Row>
        <Row>
          <TextField
            labelText="Telefone"
            placeholder="Telefone"
            value={props.values.telephone}
            onChange={(value) => {
              props.setData((prevUser) => ({
                ...prevUser,
                telephone: value.target.value,
              }));
            }}
          />
          <TextField
            labelText="Email"
            placeholder="Email"
            value={props.values.email}
            onChange={(value) => {
              props.setData((prevUser) => ({
                ...prevUser,
                email: value.target.value,
              }));
            }}
          />
        </Row>
        <Row>
          <TextField
            labelText="Data de nascimento"
            placeholder="Data de nascimento"
            value={`${props.values.birthDate}`}
            onChange={(value) => {
              props.setData((prevUser) => ({
                ...prevUser,
                birthDate: value.target.value,
              }));
            }}
            type="Date"
            status={props.errors.birthDate ? "error" : "default"}
            errortext={props.errors.birthDate}
          />
          <TextField
            labelText="Profissão"
            placeholder="Profissão"
            value={props.values.job}
            onChange={(value) => {
              props.setData((prevUser) => ({
                ...prevUser,
                job: value.target.value,
              }));
            }}
          />
        </Row>
      </Section>
      {props.values.responsibles && (
        <>
          {props.values.responsibles.map((responsible, responsibleIndex) => {
            return (
              <Section>
                <SectionHeader text="Dados responsável" />
                <Row>
                  <TextField
                    labelText="CPF"
                    placeholder="CPF"
                    value={responsible.cpf}
                    onChange={(value) => {
                      props.setData((prevUser) => ({
                        ...prevUser,
                        responsibles: props.values.responsibles?.map(
                          (values, index) => {
                            if (responsibleIndex === index) {
                              return {
                                ...values,
                                cpf: value.target.value,
                              };
                            }
                            return values;
                          }
                        ),
                      }));
                    }}
                    status={
                      props.errors.responsibles &&
                      props.errors.responsibles[responsibleIndex].cpf
                        ? "error"
                        : "default"
                    }
                    errortext={
                      props.errors.responsibles
                        ? props.errors.responsibles[responsibleIndex].cpf
                        : ""
                    }
                  />
                  <TextField
                    labelText="Sexo"
                    placeholder="Sexo"
                    value={responsible.gender}
                    onChange={(value) => {
                      props.setData((prevUser) => ({
                        ...prevUser,
                        responsibles: props.values.responsibles?.map(
                          (values, index) => {
                            if (responsibleIndex === index) {
                              return {
                                ...values,
                                gender: value.target.value as "M" | "F",
                              };
                            }
                            return values;
                          }
                        ),
                      }));
                    }}
                    status={
                      props.errors.responsibles &&
                      props.errors.responsibles[responsibleIndex].gender
                        ? "error"
                        : "default"
                    }
                    errortext={
                      props.errors.responsibles
                        ? props.errors.responsibles[responsibleIndex].gender
                        : ""
                    }
                  />
                </Row>
                <Row>
                  <TextField
                    labelText="Nome"
                    placeholder="Nome"
                    value={responsible.name}
                    onChange={(value) => {
                      props.setData((prevUser) => ({
                        ...prevUser,
                        responsibles: props.values.responsibles?.map(
                          (values, index) => {
                            if (responsibleIndex === index) {
                              return {
                                ...values,
                                name: value.target.value,
                              };
                            }
                            return values;
                          }
                        ),
                      }));
                    }}
                    status={
                      props.errors.responsibles &&
                      props.errors.responsibles[responsibleIndex].name
                        ? "error"
                        : "default"
                    }
                    errortext={
                      props.errors.responsibles
                        ? props.errors.responsibles[responsibleIndex].name
                        : ""
                    }
                  />
                  <TextField
                    labelText="Sobrenome"
                    placeholder="Sobrenome"
                    value={responsible.lastName}
                    onChange={(value) => {
                      props.setData((prevUser) => ({
                        ...prevUser,
                        responsibles: props.values.responsibles?.map(
                          (values, index) => {
                            if (responsibleIndex === index) {
                              return {
                                ...values,
                                lastName: value.target.value,
                              };
                            }
                            return values;
                          }
                        ),
                      }));
                    }}
                    status={
                      props.errors.responsibles &&
                      props.errors.responsibles[responsibleIndex].lastName
                        ? "error"
                        : "default"
                    }
                    errortext={
                      props.errors.responsibles
                        ? props.errors.responsibles[responsibleIndex].lastName
                        : ""
                    }
                  />
                </Row>
                <Row>
                  <TextField
                    labelText="Telefone"
                    placeholder="Telefone"
                    value={responsible.telephone}
                    onChange={(value) => {
                      props.setData((prevUser) => ({
                        ...prevUser,
                        responsibles: props.values.responsibles?.map(
                          (values, index) => {
                            if (responsibleIndex === index) {
                              return {
                                ...values,
                                telephone: value.target.value,
                              };
                            }
                            return values;
                          }
                        ),
                      }));
                    }}
                  />
                  <TextField
                    labelText="Email"
                    placeholder="Email"
                    value={responsible.email}
                    onChange={(value) => {
                      props.setData((prevUser) => ({
                        ...prevUser,
                        responsibles: props.values.responsibles?.map(
                          (values, index) => {
                            if (responsibleIndex === index) {
                              return {
                                ...values,
                                email: value.target.value,
                              };
                            }
                            return values;
                          }
                        ),
                      }));
                    }}
                    status={
                      props.errors.responsibles &&
                      props.errors.responsibles[responsibleIndex].email
                        ? "error"
                        : "default"
                    }
                    errortext={
                      props.errors.responsibles
                        ? props.errors.responsibles[responsibleIndex].email
                        : ""
                    }
                  />
                </Row>
                <Row>
                  <TextField
                    labelText="Data de nascimento"
                    placeholder="Data de nascimento"
                    value={`${responsible.birthDate}`}
                    type="Date"
                    onChange={(value) => {
                      props.setData((prevUser) => ({
                        ...prevUser,
                        responsibles: props.values.responsibles?.map(
                          (values, index) => {
                            if (responsibleIndex === index) {
                              return {
                                ...values,
                                birthDate: value.target.value,
                              };
                            }
                            return values;
                          }
                        ),
                      }));
                    }}
                    status={
                      props.errors.responsibles &&
                      props.errors.responsibles[responsibleIndex].birthDate
                        ? "error"
                        : "default"
                    }
                    errortext={
                      props.errors.responsibles
                        ? props.errors.responsibles[responsibleIndex].birthDate
                        : ""
                    }
                  />
                  <TextField
                    labelText="Profissão"
                    placeholder="Profissão"
                    value={responsible.job}
                    onChange={(value) => {
                      props.setData((prevUser) => ({
                        ...prevUser,
                        responsibles: props.values.responsibles?.map(
                          (values, index) => {
                            if (responsibleIndex === index) {
                              return {
                                ...values,
                                job: value.target.value,
                              };
                            }
                            return values;
                          }
                        ),
                      }));
                    }}
                  />
                </Row>
              </Section>
            );
          })}
        </>
      )}
    </>
  );
}
