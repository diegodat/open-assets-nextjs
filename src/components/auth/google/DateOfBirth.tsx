import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/auth/Credenza";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/packages/components/ui/form";
import React, { FC } from "react";
import { GoogleUserSignUp } from "./GoogleUserSignUpModal";
import { useFormContext } from "react-hook-form";
import { Input } from "@/packages/components/ui/input";
import { Button } from "@/packages/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/packages/components/ui/select";

type Props = {
  onNext: () => void;
};

const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

export const DateOfBirthForm: FC<Props> = (props) => {
  const {
    getValues,
    watch,
    control,
    trigger,
    formState: { errors },
  } = useFormContext<GoogleUserSignUp>();

  const handleSubmit = async () => {
    const isValid = await trigger([
      "birthday.year",
      "birthday.month",
      "birthday.day",
    ]);
    console.log({ isValid });
    if (!isValid) {
      return;
    }
    props.onNext();
  };
  return (
    <CredenzaContent>
      <CredenzaHeader>
        <CredenzaTitle className="text-left text-[#212121] text-[20px] font-[600]">
          生年月日
        </CredenzaTitle>
        <CredenzaDescription className="text-left text-[#212121] text-[12px] leading-[21px]">
          この情報は公開されません。このアカウントをビジネス、ペットなどに使う場合でも、ご自身の年齢を正確にご入力してください。
          後に、身分証確認書類の提出時にデータを利用する可能性があります。
        </CredenzaDescription>
      </CredenzaHeader>
      <CredenzaBody>
        <FormField
          control={control}
          name="birthday.year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>年</FormLabel>
              <Select
                onValueChange={(value: string) => {
                  field.onChange(parseInt(value));
                }}
                defaultValue={field.value?.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {years.map((year) => {
                    return (
                      <SelectItem key={year} value={year.toString()}>
                        {year}年
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="birthday.month"
          render={({ field }) => (
            <FormItem>
              <FormLabel>年</FormLabel>
              <Select
                onValueChange={(value: string) => {
                  field.onChange(parseInt(value));
                }}
                defaultValue={field.value?.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {months.map((month) => {
                    return (
                      <SelectItem key={month} value={month.toString()}>
                        {month}月
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="birthday.day"
          render={({ field }) => (
            <FormItem>
              <FormLabel>日</FormLabel>
              <Select
                onValueChange={(value: string) => {
                  field.onChange(parseInt(value));
                }}
                defaultValue={field.value?.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {days.map((day) => {
                    return (
                      <SelectItem key={day} value={day.toString()}>
                        {day}日
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CredenzaBody>
      <CredenzaFooter>
        <Button
          className="bg-[#1976D2] hover:bg-[#1976D2]"
          type="submit"
          onClick={handleSubmit}
        >
          次へ
        </Button>
        <CredenzaClose asChild>
          <Button variant="link">閉じる</Button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  );
};
