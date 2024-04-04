import DateTimePicker from "@react-native-community/datetimepicker";
import { type FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colors } from "../../design";

const DEFAULT_ROUNDS = 4;

export type FormData = {
  name: string;
  date: Date;
  rounds: number;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

export const NewTournamentForm: FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      date: new Date(),
      rounds: DEFAULT_ROUNDS,
    },
  });

  const [roundsValueStr, setRoundsValueStr] = useState(
    DEFAULT_ROUNDS.toString(),
  );
  const [openDatepicker, setOpenDatepicker] = useState(false);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <Text>Turnauksen nimi</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => onChange(value)}
              onBlur={onBlur}
              value={value}
              multiline
            />
          </>
        )}
        rules={{ required: true }}
      />
      <Controller
        control={control}
        name="rounds"
        render={({ field: { onChange, onBlur } }) => (
          <>
            <Text>Kierrosten lukumäärä</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              onChangeText={(value) => {
                setRoundsValueStr(value);
                onChange(Number.parseInt(value));
              }}
              onBlur={onBlur}
              value={roundsValueStr}
            />
          </>
        )}
        rules={{
          validate: (value) => /^\d+$/.test(value.toString()) && value > 0,
        }}
      />
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <>
            <Text>Päivämäärä</Text>
            <Button
              title={value.toDateString()}
              onPress={() => setOpenDatepicker(true)}
              color={colors.navy}
            />
            {openDatepicker && (
              <DateTimePicker
                mode="date"
                onChange={(_e, date) => {
                  setOpenDatepicker(false);
                  onChange(date);
                }}
                value={value}
              />
            )}
          </>
        )}
        rules={{ required: true }}
      />
      <Button
        title="Tallenna"
        disabled={!isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 16,
    alignSelf: "stretch",
    flex: 1,
  },
  textInput: {
    borderColor: colors.navy,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: 2,
    paddingHorizontal: 4,
    textAlign: "center",
  },
});
