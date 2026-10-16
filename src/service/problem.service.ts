import type {
  CreateProblemDto,
  UpdateProblemDto,
  ProblemResponseDto,
} from "../DTO/problem.dto";

interface IProblemService {
  createProblem(problem: CreateProblemDto): Promise<ProblemResponseDto>;
  getAllProblems(): Promise<ProblemResponseDto[]>;
}
